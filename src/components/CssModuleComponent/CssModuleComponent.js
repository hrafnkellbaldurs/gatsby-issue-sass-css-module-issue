import React from 'react'
import styles from './CssModuleComponent.module.scss'
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg'

const CssModuleComponent = () => (
    <div className={ `${styles.container} container-indicator` }>
        <ul>
            <li>
                <a>CssModuleComponent, this should be green</a>
                <a>
                    <FacebookIcon></FacebookIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default CssModuleComponent