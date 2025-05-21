import useCalculateUserStatus from "./hooks/calculateUserStatus";

export default function CheckUserStatus() {
  const isOnline = useCalculateUserStatus();
  return <div>{isOnline ? "User in Online" : "User is Offline"}</div>;
}
