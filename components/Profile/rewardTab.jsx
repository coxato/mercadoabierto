import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// components
import { Message, Button, Modal } from 'semantic-ui-react';
import Loader from '../Loaders/simple';
// store
import { useUser, useUserInfo } from '../../store/user';
// requests
import rewardRequests from '../../requests/reward';

const REWARD = 200;

const PurchasesTab = () => {
    const [checking, setChecking] = useState(true);
    const [data, setData] = useState({});
    const [isRewarded, setIsRewarded] = useState(false);
    const { updateMoney } = useUser();
    const { username } = useUserInfo();
    const { push, query: { params } } = useRouter();

    const handleCheck = async () => {
        setChecking(true);

        const _data = await rewardRequests.checkRewardTime();
        
        setData(_data);
        
        setChecking(false);
    } 

    const handleGive = async () => {
        setChecking(true);

        const _data = await rewardRequests.giveReward();
        setIsRewarded(true);
        setData(_data);
        // update in context
        updateMoney(REWARD);

        setChecking(false);
    }

    useEffect(() => {
        // if logged user and profile user are not the same, redirect to /users/<@username>
        if(username !== params[0]){
            push(`/users/${params[0]}`)
        }else{
            handleCheck();
        }
    }, []);

    // ===== render =====

    if(checking) return (
        <div className="container">
            <Loader name="instagram" color="var(--black)" />
        </div>
    )

    return (
        <div className="container">
            <Modal open={isRewarded} closeIcon onClose={() => setIsRewarded(false)}>
                <Modal.Header content="Congratulations" />
                <Modal.Content>You've earned ${REWARD}. Come back tomorrow and get a reward again</Modal.Content>
                <Modal.Actions>
                    <Button color="green" onClick={() => setIsRewarded(false)}>Ok</Button>
                </Modal.Actions>
            </Modal>

            {
                data.isOneDayOld
                ?
                <Button onClick={handleGive} color="green">Get my ${REWARD} reward!</Button>
                :
                <Message>
                    <Message.Header content="You need more time to get a reward again" />
                    <Message.Content >
                        Come back again in {data.howMuchLeft.hours}:{data.howMuchLeft.minutes} 
                    </Message.Content>
                </Message>
            }

            <style jsx>{`
                .container{ text-align: center; }
            `}</style>
        </div>
    );
}
 
export default PurchasesTab;