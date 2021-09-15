export const addToAction = (companyToAdd) => ({
    type: "ADD_COMPANY",
    payload: companyToAdd
})

export const removeFromAction = (index) => ({
    type: "REMOVE_COMPANY",
    payload: index
})