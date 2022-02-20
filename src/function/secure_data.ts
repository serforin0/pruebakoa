import { hash, compare, genSalt } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const encrypt = async (str: string) => {
    const salt = await genSalt(12);
    return hash(str, salt);
};

const compareData = async ( data: string, hash: string) => {
    return compare(data, hash);
};

export { encrypt, compareData };