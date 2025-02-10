import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfileViews = () => {
  const { data } = useSession();

  return (
    <section className="flex h-screen items-center justify-center bg-white font-medium">
      <section className="mx-auto w-80 transform rounded-md bg-emerald-900 p-8 shadow-lg transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24">
            <Image
              src={data?.user?.image || "/assets/profile.png"}
              alt={data?.user?.fullname || "User Image"}
              width={100}
              height={100}
              className="rounded-full border-4 border-yellow-600 shadow-md"
            />
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold tracking-wide text-yellow-600">
              {data?.user?.fullname || "Guest User"}
            </h2>
            <p className="mt-2.5 font-normal text-yellow-600">
              {data?.user?.email || "guest@example.com"}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProfileViews;
