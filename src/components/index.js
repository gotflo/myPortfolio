import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
    const { y: pageYoffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);
    useEffect(() => {
        if (pageYoffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYoffset])
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    if (!visible) {
        return false;
    }

    return (
        <div className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <i className="icone fas fa-chevron-up"></i>
        </div>
    );
};

export default ScrollToTop;
