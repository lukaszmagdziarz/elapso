using NUnit.Framework;
using System;

namespace ElapsoApi.Tests.Unit
{
    [TestFixture]
    public class ElapsoTests
    {
        [Test]
        public void Test1()
        {
            int x;

            x = 5;

            Assert.That(x > 0);
        }
    }
}
