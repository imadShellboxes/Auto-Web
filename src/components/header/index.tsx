import { ConnectButton } from "web3uikit"
export default function Header(){
    return(
        <div className="  ">
            <ConnectButton moralisAuth={false}/>
        </div>
    )
}