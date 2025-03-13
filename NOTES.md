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

* Providers are plain JavaScript classes declared as "providers" in a NestJS module. Many of the basic Nest classes, such as services, repositories, factories, and helpers, can be treated as providers. The key idea behind a provider is that it can be injected as a dependency in the controllers. Controllers handle HTTP requests and more complex tasks (for example managing application logic, handling data storage and retrieval, etc.) are delegated to providers.

* Modules can re-export modules that they import. In the example below, the CommonModule is both imported into and exported from the CoreModule, making it available for other modules which import this one.
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}

* When you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.), make the module global with the @Global() decorator. Read "Global Modules" on https://docs.nestjs.com/modules.

