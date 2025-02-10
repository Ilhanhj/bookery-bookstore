import { useSession } from "next-auth/react";

const UserStatus = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Silakan login untuk mulai belanja.</p>;
  }

  console.log("User email:", session.user?.email);

  return <p>Selamat datang, {session.user?.email}!</p>;
};

export default UserStatus;
