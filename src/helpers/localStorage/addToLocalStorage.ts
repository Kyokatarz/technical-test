export default function addToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}
