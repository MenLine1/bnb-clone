'use client';

import Container from "../Container";
import {TbBeach, TbMountain, TbPool} from "react-icons/tb";
import {GiIsland, GiSailboat, GiWindmill} from "react-icons/gi";
import {
    MdOutlineCastle,
    MdOutlineForest,
    MdOutlineScubaDiving,
    MdOutlineVilla,
} from "react-icons/md";
import CategoryBox from "../CategoryBox";
import {usePathname, useSearchParams} from "next/navigation";
import {FaCampground, FaSkiing} from "react-icons/fa";
import {BsSnow} from "react-icons/bs";
import {PiCactusBold} from "react-icons/pi";
import {IoDiamondOutline} from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has pool'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on island'
    },
    {
        label: 'Lake',
        icon: GiSailboat,
        description: 'This property is close to lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities'
    },
    {
        label: 'Castles',
        icon: MdOutlineCastle,
        description: 'This property is close to castle'
    },
    {
        label: 'Camping',
        icon: FaCampground,
        description: 'This property is perfect for camping'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is snowy'
    },
    {
        label: 'Desert',
        icon: PiCactusBold,
        description: 'This property is in the desert'
    },
    {
        label: 'Forest',
        icon: MdOutlineForest,
        description: 'This property is close to forest'
    },
    {
        label: 'Diving',
        icon: MdOutlineScubaDiving,
        description: 'This property is perfect for diving'
    },
    {
        label: 'Luxurious',
        icon: IoDiamondOutline,
        description: 'This property is luxurious'
    },
    {
        label: 'Different',
        icon: FaQuestion,
        description: 'There is no match for your property'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories;