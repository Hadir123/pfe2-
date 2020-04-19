@component('mail::message')
# Choose Password

Click on the button bellow to choose your password

@component('mail::button', ['url' => 'http://localhost:4200/'])
Reset Password
@endcomponent

Thanks,<br>
Haygard Clinic
@endcomponent
