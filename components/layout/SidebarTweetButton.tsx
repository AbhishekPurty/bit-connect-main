import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoIosCreate } from 'react-icons/io'

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const { data: currentUser } = useCurrentUser();

    const onClick = useCallback(() => {
        if(!currentUser) {
            return loginModal.onOpen();
        }
        
        router.push('/');
    }, [loginModal,router,currentUser]);

    return (
        <div onClick={onClick}>
            {/* Mobile view */}
            <div
                className="
                    ml-2
                    flex-row
                    mt-6
                    lg:hidden
                    rounded-full
                    h-14
                    w-14
                    p-4
                    flex
                    items-center
                    justify-center
                    bg-sky-500
                    hover:bg-opacity-80
                    transition
                    cursor-pointer
                "
            >
                <IoIosCreate size={24} color="white" />
            </div>
            {/* Desktop view */}
            <div className="
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition
            "
            >
                <p className="
                hidden
                lg:block
                text-center
                font-semibold
                text-white
                text-[20px]
                ">
                    {/* sidebar tweet button label */}
                    Share an !dea 
                </p>
            </div>
        </div>
    );
}

export default SidebarTweetButton;