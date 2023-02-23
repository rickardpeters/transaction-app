from functools import wraps


class ServiceInjector:

    def __init__(self):
        self.deps = {}

    def register(self, name=None):

        name = name

        def decorator(thing):
            """
            thing here can be class or function or anything really
            """

            if not name:
                if not hasattr(thing, "__name__"):
                    raise Exception("no name")
                thing_name = thing.__name__  # Set the name of the dependency
                # to the name of the class
            else:
                thing_name = name   # Set the name of the dependency to a name
                # specified in the register function
            self.deps[thing_name] = thing  # I don't think we
            # will be doing this//Elias
            return thing

        return decorator

    def inject(self, func):

        @wraps(func)
        def decorated(*args, **kwargs):
            new_args = args + (self.deps, )
            return func(*new_args, **kwargs)

        return decorated
