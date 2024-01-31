import React from 'react';
import { useTranslation } from 'react-i18next';

const Detail = () => {
    const { t } = useTranslation();
    return <>
        ciao da detail {t('greeting')}
    </>

}
export default Detail;