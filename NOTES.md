* You can use the following decorators in the handler's signature.
    DECORATOR               => OBJECT THEY REPRESENT
    @Request(), @Req()	    => req
    @Response(), @Res()*	=> res
    @Next()	                => next
    @Session()	            => req.session
    @Param(key?: string)	=> req.params / req.params[key]
    @Body(key?: string)	    => req.body / req.body[key]
    @Query(key?: string)	=> req.query / req.query[key]
    @Headers(name?: string)	=> req.headers / req.headers[name]
    @Ip()	                => req.ip
    @HostParam()	        => req.hosts

* There is some caveat when using @Req() and @Res() decorators. Read "Request Object" on https://docs.nestjs.com/controllers.

* DTO (Data Transfer Object) Schema is an object that specifies how data should be sent over the network. Nest recommends defining DTO Schema using classes.