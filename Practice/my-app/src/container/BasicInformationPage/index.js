import React, { useEffect, useState } from 'react';
import AppInput from '../../component/AppInput';

function BasicInformationPage() {

    const [info, setInfo] = useState({});

    const [fillTrigger, setFillTrigger] = useState(false);


    const [isReset, setIsReset] = useState(false);

    const handeChangeValue = (e) => {
        setInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value,

        }))
    };

    const handleTriggerFill = () => {
        setFillTrigger(!fillTrigger);
    }

    // componentDidmount 
    // useEffect(() => {
    //     setInfo({
    //         fullname: 'Tuan Anh',
    //         phone: '0969620254',
    //         email: 'afef@gmail.com',
    //         address: 'Bac Giang',
    //     });
    // }, []);

    useEffect(() => {
         setInfo({
            fullname: 'Tuan Anh',
            phone: '0969620254',
            email: 'afef@gmail.com',
            address: 'Bac Giang',
        });
    }, [fillTrigger]);

    const handleReset = () => {
        setInfo({});
        setIsReset(!isReset);
    }
     useEffect(() => {
         
         return () => {
             console.log(info);
         };
     }, [isReset]);

    return (
        <div>
            {isReset &&
                <div>

                    <AppInput
                        type={'text'}
                        value={info.fullname || ''}
                        name={'fullname'}
                        onChangeCallback={handeChangeValue}
                    />
                    <AppInput
                        type={'number'}
                        value={info.phone || ''}
                        name={'phone'}
                        onChangeCallback={handeChangeValue}
                    />
                    <AppInput
                        type={'email'}
                        value={info.email || ''}
                        name={'email'}
                        onChangeCallback={handeChangeValue}
                    />
                    <AppInput
                        type={'text'}
                        value={info.address || ''}
                        name={'address'}
                        onChangeCallback={handeChangeValue}
                    />
                </div>
            }
            <button onClick={handleTriggerFill}>Click fill</button>

            <button onClick={handleReset}>Reseet Form</button>
        </div>
    );
}

export default BasicInformationPage;
