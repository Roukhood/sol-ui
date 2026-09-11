import { SoluiNameLogo, SoluiNameLogoBlack } from "./svgs"

export default function SolUINameLogoElement(){
    return(
        <div className="">
              <div className="dark:hidden">
                <SoluiNameLogo />
              </div>
              <div className="dark:block hidden">
                <SoluiNameLogoBlack />
              </div>
        </div>
    )
}