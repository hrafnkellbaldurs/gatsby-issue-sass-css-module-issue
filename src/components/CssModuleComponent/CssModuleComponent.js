import React from 'react'
import styles from './CssModuleComponent.module.css'

const CssModuleComponent = () => (
    <div className={ `${styles.container} container-indicator` }>
        <h2>CssModuleComponent</h2>
    </div>
)

export default CssModuleComponent