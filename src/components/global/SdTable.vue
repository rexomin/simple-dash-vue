<template>
	<div class="table-wrapper">
		<table class="table">
			<slot></slot>
		</table>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.table-wrapper{
    overflow-x: auto;

    .table{
        width: 100%;
        border-collapse: collapse;
        white-space: nowrap;

        tr{
            border-bottom: 1px solid #F1F1F1;
    
            th{
                @extend .tg-body-sm;
                padding: 12px 24px;
                color: #4F5B67;
            }
    
            td{
                @extend .tg-body-md;
                padding: 14px 24px;
            }
        }
    }
}
</style>