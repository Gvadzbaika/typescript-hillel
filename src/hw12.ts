// Utility function for deprecated methods
function DeprecatedMethod(reason: string, replacedMethod?: string) {
  return function <T, A extends any[], R>(target: T, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: T, ...args: A): R {
      console.log(`Don't use this method because ${reason}${replacedMethod ? ', please use ' + replacedMethod : ''}`);
      return originalMethod.apply(this, args);
    };
  };
}

// Decorator for minimum length validation
function MinLength(minimum: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length < minimum) {
        console.log(`${key} must be at least ${minimum} characters long.`);
      } else {
        value = newValue;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

// Decorator for maximum length validation
function MaxLength(maximum: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length > maximum) {
        console.log(`${key} must be at most ${maximum} characters long.`);
      } else {
        value = newValue;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

// Decorator for email format validation
function Email(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    return value;
  };

  const setter = function (newValue: string) {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailPattern.test(newValue)) {
      console.log(`Invalid format of email for ${key}`);
    } else {
      value = newValue;
    }
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
