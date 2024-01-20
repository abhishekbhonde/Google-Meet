import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";

const room = () => {
    const socket = useSocket();
    const { peer, myId } = usePeer();
};

export default room;