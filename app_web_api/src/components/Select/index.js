import './style.css'

export function Select({
  text,
  name,
  options,
  handlerOnChange,
}) {

  const opt = options.map((e) => {
    return <option value={e.id} key={e.id}>{e.name}</option>
  })
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma categoria</option>
        {opt}
      </select>
    </div>
  )
}
