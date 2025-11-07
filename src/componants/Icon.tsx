import React from "react";

type IconProps = object

const Icon: React.FC<IconProps> = () => {
    return (<div className="h-33 w-33 rounded-full overflow-hidden flex items-center justify-center">
        <img src="./oui.png"></img>
    </div>)
};

export default Icon;