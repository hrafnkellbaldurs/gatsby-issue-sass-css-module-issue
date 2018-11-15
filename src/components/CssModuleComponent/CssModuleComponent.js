import React from 'react'
import styles from './CssModuleComponent.module.scss'

const CssModuleComponent = () => (
    <div className={ `${styles.container} container-indicator` }>
        <ul>
            <li>
                <a>CssModuleComponent, this should be green</a>
            </li>
        </ul>
    </div>
)

export default CssModuleComponent