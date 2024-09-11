// arrays, objetos
let meta = {
  value: 'ler um livro por mês',
  adress: 2,
  checked: false,
  isChecked: (info) => {
    console.log(meta.value)
  }
}

console.log()
meta.isChecked(meta.value)
const criarMeta = () => {}