import {Link} from "react-router-dom";
import Depth1Menu from "./Depth1Menu.tsx";

import logo from "../../assets/img/logo.png"

interface Depth1MenuProps {
    mainName:string,
    subMenus:[{name:string,toPath:string}],
    basicPath:string,
    iconName:string
}

function AsideMenuComponent() {

    const m1:Depth1MenuProps = {
        mainName:"지역 담당자 관리",
        subMenus:[{name:"지역 담당자 리스트",toPath:"/list"}],
        basicPath:"/localManagers",
        iconName: "users.png"
    }

    const m2:Depth1MenuProps = {
        mainName:"제작자 신청서 관리",
        subMenus:[{name:"제작자 신청서 리스트",toPath:"/list"}],
        basicPath:"/appliers",
        iconName: "edit.png"
    }

    const m3:Depth1MenuProps = {
        mainName:"이벤트 지점 관리",
        subMenus:[{name:"이벤트 지점 신청서 리스트",toPath:"/list"}],
        basicPath:"/eventLocations",
        iconName: "home.png"
    }

    const m4:Depth1MenuProps = {
        mainName:"이벤트 관리",
        subMenus:[{name:"이벤트 리스트",toPath:"/list"}],
        basicPath:"/eventManagements",
        iconName: "calendar.png"
    }

    const m5:Depth1MenuProps = {
        mainName:"통계",
        subMenus:[{name:"",toPath:""}],
        basicPath:"/",
        iconName: "stats.png"
    }

    const m6:Depth1MenuProps = {
        mainName:"문의",
        subMenus:[{name:"",toPath:""}],
        basicPath:"/",
        iconName: "headset.png"
    }

    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-side-navy md:block flex-shrink-0">
            <div className="py-4 text-neutral-800">

                {/* 로고 부분 */}
                <Link to="/main" className="flex items-center justify-center mb-4 p-2">
                       <img src={logo} alt='/logo' className='px-14'/>
                </Link>

                {/* 1Depth 메뉴 */}
                <ul className="mt-6 space-y-2 text-txt-grey">
                    <Depth1Menu {...m1}></Depth1Menu>
                    <Depth1Menu {...m2} ></Depth1Menu>
                    <Depth1Menu {...m3} ></Depth1Menu>
                    <Depth1Menu {...m4} ></Depth1Menu>
                    <Depth1Menu {...m5} ></Depth1Menu>
                    <Depth1Menu {...m6} ></Depth1Menu>
                </ul>
            </div>
        </aside>
    );
}

export default AsideMenuComponent;