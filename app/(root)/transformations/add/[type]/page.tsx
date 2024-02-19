import Header from "@/components/Shared/Header";
import TransformationForm from "@/components/Shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];
  let user;

  if (userId) {
    user = await getUserById(userId);
  }

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        {userId ? (
          <TransformationForm
            action="Add"
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
          />
        ) : (
          <TransformationForm
            action="Add"
            type={transformation.type as TransformationTypeKey}
          />
        )}
      </section>
    </>
  );
};

export default AddTransformationTypePage;
