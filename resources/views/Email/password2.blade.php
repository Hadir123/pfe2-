@component('mail::message')
# Choose Password

Click on the button bellow to choose your password
your email is :
@component('mail::button', ['url' => 'localhost:4200/petownerPassword'])
Reset Password
@endcomponent

Thanks,<br>
Haygard Clinic
@endcomponent
