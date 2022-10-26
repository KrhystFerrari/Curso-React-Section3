
const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (<p>Pode tirar a carteira de habilitação</p>) : (<p>Não pode tirar a carteira de habilitação</p>)}
    </div>
  )
}

export default UserDetails