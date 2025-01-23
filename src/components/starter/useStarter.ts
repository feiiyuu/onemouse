import { ref } from 'vue'
import { StartStatus } from '../../types/conn'
export default function useStarter() {
    const status = ref(StartStatus.STOP)
    function SetStatus(value: StartStatus.RUNNING | StartStatus.STOP) {
        status.value = value
    }
    return { status, SetStatus }
}