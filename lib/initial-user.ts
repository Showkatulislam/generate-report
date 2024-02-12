import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initailUser = async () => {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }

  const Iam = await db.user.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (Iam) {
    return Iam;
  }

  const newIam = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newIam;
};
