type User = {
    name: string;
    age: number;
}

const isAdult = (user: User): boolean =>  {
    return user.age >= 18;
}

const justine: User = {
    name: 'Justine',
    age: 23
};

const isJustineAdult: boolean = isAdult(justine);