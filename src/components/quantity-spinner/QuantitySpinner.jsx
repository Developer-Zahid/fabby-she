import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import useCartStore from '../../app/store/cartStore';
import MinusIcon from '../../assets/icons/MinusIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import './quantitySpinner.scss'

const QuantitySpinner = ({ sendCurrentQuantity, initialValue, min, max }, ref)=> {
    const minQuantity = min ? min : 1;
    const maxQuantity = max;
    const [currentQuantity, setCurrentQuantity] = useState(initialValue ? initialValue : minQuantity)
    const quantityRef = useRef();

    useEffect(() => {
        sendCurrentQuantity(currentQuantity)
    }, [currentQuantity, sendCurrentQuantity])

    const resetQuantity = () => {
        setCurrentQuantity(minQuantity)
    }

    useImperativeHandle(ref, () => ({
        resetQuantity: () => resetQuantity()
    }))

    const handleInputChange = (event)=>{
        const enteredValue = parseFloat(event.target.value)
        const regex = /^[\d\b]+$/
        if (regex.test(enteredValue)) {
            setCurrentQuantity(enteredValue >= minQuantity && enteredValue <= maxQuantity ? enteredValue : currentQuantity);
        }else{
            setCurrentQuantity(currentQuantity)
        }
    }

    const handleDecreaseClick = ()=>{
        setCurrentQuantity((currentQuantity - 1) >= minQuantity ? (currentQuantity - 1) : minQuantity);
    }

    const handleIncreaseClick = ()=>{
        setCurrentQuantity(currentQuantity < maxQuantity ? (currentQuantity + 1) : currentQuantity)
    }

    return (
        <div className="spinner">
            <button type="button" className="spinner__btn spinner__btn--decrease" onClick={handleDecreaseClick}>
                <MinusIcon />
            </button>
            <input ref={quantityRef} type="number" className="spinner__input" value={currentQuantity} min={minQuantity} max={maxQuantity} onChange={handleInputChange} />
            <button type="button" className="spinner__btn spinner__btn--increase" onClick={handleIncreaseClick}>
                <PlusIcon />
            </button>
        </div>
    )
}

export default forwardRef(QuantitySpinner);
