import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../../services/firebase/firebase"
import { useNavigate } from "react-router-dom"
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/firebase/employees"
import {
    Container,
    Header,
    Title,
    LogoutButton,
    Form,
    Input,
    ButtonGroup,
    PrimaryButton,
    Table,
    EditButton,
    DeleteButton,
    ActionButton,
    TableWrapper
} from './Dashboard.styles'


export default function Dashboard() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState<any[]>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [selectedId, setSelectedId] = useState<string | null>(null);

    async function fetchData() {
        const data = await getAllEmployees();
        setEmployees(data);
    }

    async function handleDelete(id: string) {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este funcionário?");
        if (!confirmDelete) return;

        try {
            const employeeDoc = doc(db, "employees", id);
            await deleteDoc(employeeDoc);
            console.log("Funcionário deletado!");
            fetchData();
        } catch (error) {
            console.error("Erro ao deletar funcionário:", error);
        }

    }


    async function handleAddOrUpdateEmployee() {
        try {
            if (selectedId) {
                const employeeDoc = doc(db, "employees", selectedId);
                await updateDoc(employeeDoc, {
                    name,
                    email,
                    phone,
                    role
                });
                console.log("Funcionário atualizado!");
            } else {
                await addDoc(collection(db, "employees"), {
                    name,
                    email,
                    phone,
                    role
                });
                console.log("Funcionário cadastrado!");
            }
            setName('');
            setEmail('');
            setPhone('');
            setRole('');
            setSelectedId(null);
            fetchData();
        } catch (error) {
            console.error("Erro salvar funcionário", error);
        }

    }

    function handleEdit(employee: any) {
        setName(employee.name);
        setEmail(employee.email);
        setPhone(employee.phone);
        setRole(employee.role);
        setSelectedId(employee.id);
    }

    function handleLogout() {
        signOut(auth)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.error("Erro ao deslogar", error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                alert("Você precisa estar logado para acessar o Dashboard.");
                navigate("/login");
            }
        });

        fetchData();
        return () => unsubscribe();
    }, [navigate]);


    return (
        <Container>
            <Header>
                <Title>Dashboard</Title>
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </Header>

            <Form>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="tel"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Cargo"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </Form>

            <ButtonGroup>
                <PrimaryButton onClick={handleAddOrUpdateEmployee}>
                    {selectedId ? "Atualizar Funcionário" : "Cadastrar Funcionário"}
                </PrimaryButton>

                {selectedId && (
                    <ActionButton onClick={() => {
                        setSelectedId(null);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setRole('');
                    }}>
                        Cancelar Edição
                    </ActionButton>
                )}
            </ButtonGroup>
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cargo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((empployee) => (
                            <tr key={empployee.id}>
                                <td>{empployee.name}</td>
                                <td>{empployee.email}</td>
                                <td>{empployee.phone}</td>
                                <td>{empployee.role}</td>
                                <td>
                                    <ButtonGroup>
                                        <EditButton onClick={() => handleEdit(empployee)}>Editar</EditButton>
                                        <DeleteButton onClick={() => handleDelete(empployee.id)}>Deletar</DeleteButton>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>
        </Container>
    )
};

