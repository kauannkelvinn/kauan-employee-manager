import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getAllEmployees() {
    const employeesCollection = collection(db, "employees");
    const snapshot = await getDocs(employeesCollection);
    const employees = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    return employees;
}