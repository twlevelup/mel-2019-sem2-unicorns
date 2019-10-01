export const getTasks = () => {
    const date = new Date(Date.now());
    return [
        { name: 'Past tasks', time: date.setSeconds(date.getSeconds() - 5000).toString(), status: 'done' },
        { name: 'Take medication', time: date.setSeconds(date.getSeconds() + 5000).toString(), status: 'todo' },
        { name: 'Doctor\'s appointment', time: date.setSeconds(date.getSeconds() + 10000).toString(), status: 'todo' },
    ]
};


