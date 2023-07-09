import Vue from 'vue'

/* global */
import SdLoading from './global/SdLoading.vue'
import SdAvatar from './global/SdAvatar.vue'
import SdAvatarStack from './global/SdAvatarStack.vue'
import SdAvatarWithName from './global/SdAvatarWithName.vue'
import SdSpacer from './global/SdSpacer.vue'
import SdBadge from './global/SdBadge.vue'
import SdBtn from './global/SdBtn.vue'
import SdIcontext from './global/SdIcontext.vue'
import SdCard from './global/SdCard.vue'
import SdMicrocard from './global/SdMicrocard.vue'
import SdMetric from './global/SdMetric.vue'
import SdProgressbar from './global/SdProgressbar.vue'
import SdTable from './global/SdTable.vue'
import SdSectionCard from './global/SdSectionCard.vue'
import SdModal from './global/SdModal.vue'
import SdUploadLoading from './global/SdUploadLoading.vue'
Vue.component('sd-loading', SdLoading)
Vue.component('sd-avatar', SdAvatar)
Vue.component('sd-avatar-stack', SdAvatarStack)
Vue.component('sd-avatar-with-name', SdAvatarWithName)
Vue.component('sd-spacer', SdSpacer)
Vue.component('sd-badge', SdBadge)
Vue.component('sd-btn', SdBtn)
Vue.component('sd-icontext', SdIcontext)
Vue.component('sd-card', SdCard)
Vue.component('sd-micro-card', SdMicrocard)
Vue.component('sd-metric', SdMetric)
Vue.component('sd-progress-bar', SdProgressbar)
Vue.component('sd-table', SdTable)
Vue.component('sd-section-card', SdSectionCard)
Vue.component('sd-modal', SdModal)
Vue.component('sd-upload-loading', SdUploadLoading)

/* inputs */
import SdInput from './inputs/SdInput.vue'
import SdTextarea from './inputs/SdTextarea.vue'
import SdSelectInput from './inputs/SdSelectInput.vue'
import SdCheckbox from './inputs/SdCheckbox.vue'
import SdAuthCode from './inputs/SdAuthCode.vue'
Vue.component('sd-input', SdInput)
Vue.component('sd-textarea', SdTextarea)
Vue.component('sd-select-input', SdSelectInput)
Vue.component('sd-checkbox', SdCheckbox)
Vue.component('sd-auth-code', SdAuthCode)


/* btns */


/* chat */
import SdChatHeader from './chat/SdChatHeader'
import SdChatMessages from './chat/SdChatMessages'
import SdChatFooter from './chat/SdChatFooter'
import SdChat from './chat/SdChat'
Vue.component('sd-chat-header', SdChatHeader)
Vue.component('sd-chat-messages', SdChatMessages)
Vue.component('sd-chat-footer', SdChatFooter)
Vue.component('sd-chat', SdChat)

/* panel */
import SdSidebar from './panel/SdSidebar.vue'
Vue.component('sd-sidebar', SdSidebar)
