<template>
    <button class="md-button" :class="[`md-button--${customClass}`,`md-button--${size}`]">
        <slot />
    </button>   
</template>
<script>
export default {
    props:{
        customClass:{
            type: String,
            default: 'default',
            validator(customClass) {
                return ['default', 'primary','success','warning','danger'].indexOf(customClass) > -1;
            },
        },
        size:{
            type: String,
            default: 'medium',
            validator(size) {
                return ['small', 'medium', 'large'].indexOf(size) > -1;
            },
        }
    }
}
</script>
<style lang="scss">
    .md-button{
        outline: none;
        cursor: pointer;
        display: relative;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        &--default{
            border-color: darkgrey;
            background-color: white;
            color: darkgrey;
        }
        &--primary{
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
        &--danger{
            color: #fff;
            background-color: #dc3545;
            border-color: #dc3545;
        }
        &--warning{
            color: #212529;
            background-color: #ffc107;
            border-color: #ffc107;
        }
        &--success{
            color: #fff;
            background-color: #28a745;
            border-color: #28a745;
        }
        &--small {
            font-size: 0.75rem;
        }
        &--medium {
          font-size: 1rem;
        }
        &--large {
          font-size: 1.5rem;
        }
    }
    
</style>