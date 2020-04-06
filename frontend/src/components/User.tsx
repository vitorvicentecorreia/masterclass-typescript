import React from "react";

interface IUser {
    name: string;
    email: string;
}

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user, children }) => {
    return (
        <div>
            <span>Nome</span> {user.name}
            <span>Email</span> {user.email}
        </div>
    );
};

export default User;
