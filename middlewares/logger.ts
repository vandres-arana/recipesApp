
const logger = (store: any) => (next: any) => (action: any) => {
    console.log('DISPATCH', action);
    let result = next(action);
    console.log('State', store.getState());

    return result;
}

export default logger