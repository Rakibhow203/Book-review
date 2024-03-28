
const getStoredHandleRead = () => {
  const storeHandleRead = localStorage.getItem('handle-read');

  if (storeHandleRead) {
    return JSON.parse(storeHandleRead);
  }

  return [];
}

const saveHandleRead = id => {

  const storeHandleRead = getStoredHandleRead();

  const exists = storeHandleRead.find(redId => redId === id);
  if (!exists) {
    storeHandleRead.push(id);

    localStorage.setItem('handle-read', JSON.stringify (storeHandleRead))
  }

}
export { getStoredHandleRead, saveHandleRead };