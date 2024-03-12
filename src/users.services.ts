import prisma from "./lib/prisma";

export const createUserService = async (userData: { email: string, name: string }) => {
    try {
        const { email, name } = userData;
        const user = await prisma.user.create({
            data: {
                email,
                name,
            },
        });
        return user;
    } catch (error) {
        throw error;
    }
};

export const getUsersService = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        throw error;
    }
};

export const getUserByIdService = async (userId: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return user;
    } catch (error) {
        throw error;
    }
};

export const updateUserService = async (userId: string, userData: { email: string, name: string }) => {
    try {
        const { email, name } = userData;
        const user = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                email,
                name,
            },
        });
        return user;
    } catch (error) {
        throw error;
    }
};

export const deleteUserService = async (userId: string) => {
    try {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });
    } catch (error) {
        throw error;
    }
};