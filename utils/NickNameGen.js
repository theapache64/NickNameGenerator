// @flow

export default class NickNameGen{

    static NICK_ENGINE = ["u","i",""];

    static getNickName(name : string) : string{
        if(name.length>4){
            const nickName = name.substring(0,4);
            return nickName + this.NICK_ENGINE[Math.floor(Math.random()* this.NICK_ENGINE.length)]
        }
        return name
    }
}