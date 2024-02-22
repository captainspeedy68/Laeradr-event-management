const getStoredServicesIds = (purchase) =>{

    const storedServicesId = localStorage.getItem(purchase);
    if (storedServicesId){
        return JSON.parse(storedServicesId);
    }
    else return [];
}

const saveServices = (id, purchase) => {
    const storedIds = getStoredServicesIds(purchase);
    const exists = storedIds.find(storedId => storedId == id);
    if (!exists){
        storedIds.push(id);
        localStorage.setItem(purchase, JSON.stringify(storedIds));
    }

}

export {getStoredServicesIds, saveServices};