import swal from 'sweetalert'
export default {
    methods: {
      flash(message) {
        return swal('Great!', message, 'success')
      }
    }
  }