
const errorHandler = (state: any) => (next: any) => (action: any) => {
    try {
        return next(action);
    } catch (error) {
        console.log('Ups, there was a problem', error);
    }
}

export default errorHandler