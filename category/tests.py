import datetime

from django.test import TestCase

from django.core.urlresolvers import reverse
from django.utils import timezone
from django.conf import settings

from djconfig.conf import override_djconfig