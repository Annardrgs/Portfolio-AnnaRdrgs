import * as React from "react";
import { AnaSignatureDiv, AnaSignature } from './style'
import Link from 'next/link';

const Footer = () => {
    return(
        <AnaSignatureDiv>
            <Link href={"https://www.linkedin.com/in/anaclaracurty/"} target="_blank">
                <AnaSignature src="AnaSignature.svg" alt="Assinatura de Ana"/>
            </Link>
        </AnaSignatureDiv>
    )
};

export default Footer;