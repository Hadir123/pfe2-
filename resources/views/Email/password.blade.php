@component('mail::message')
# Change password Request

Click on the button bellow to change your password

@component('mail::button', ['url' => 'http://localhost:4200/response-password?tokenn='.$token ])
Reset Password
@endcomponent

Thanks,<br>
Haygard Clinic
@endcomponent
