const User = ({
  avatar,
  name,
  email,
}: {
  avatar: string;
  name: string;
  email: string;
}) => {
  return (
    <>
      <img
        className="w-14 rounded-full"
        src={avatar}
        alt={`${name}'s profile image`}
      />
      <span>
        {name} {email}
      </span>
    </>
  );
};
export default User;
